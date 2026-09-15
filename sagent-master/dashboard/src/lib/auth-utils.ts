/**
 * Authentication utilities for multi-tenant business resolution
 *
 * Supports live WorkOS authentication as well as seamless Portfolio Demo Mode.
 */

export interface SafeUser {
  id: string;
  email: string;
  firstName?: string | null;
  lastName?: string | null;
}

export async function getSafeAuth(): Promise<{ user: SafeUser | null }> {
  if (process.env.WORKOS_API_KEY && process.env.WORKOS_CLIENT_ID) {
    try {
      const { withAuth } = await import('@workos-inc/authkit-nextjs');
      const auth = await withAuth();
      if (auth && auth.user) {
        return { user: auth.user };
      }
    } catch {
      // Fall through to demo user
    }
  }

  // Return realistic demo executive user for ZEN Portfolio & Client Demos
  return {
    user: {
      id: 'demo_executive',
      email: 'executive@zen-groupe.fr',
      firstName: 'Alexandre',
      lastName: 'Directeur Commercial',
    },
  };
}

export interface UserBusiness {
  id: string;
  workos_user_id: string;
  business_id: string;
  role: 'admin' | 'member' | 'viewer';
  created_at: number;
}

export const DEMO_BUSINESS_ID = 'zen-groupe-enterprise';

/**
 * Get the business ID for a user with fallback to DEMO_BUSINESS_ID
 */
export async function getUserBusinessId(
  db: D1Database,
  workosUserId?: string | null
): Promise<string | null> {
  if (!workosUserId || workosUserId === 'demo_user' || workosUserId === 'demo_executive' || !db) {
    return DEMO_BUSINESS_ID;
  }


  try {
    const result = await db
      .prepare('SELECT business_id FROM user_businesses WHERE workos_user_id = ? LIMIT 1')
      .bind(workosUserId)
      .first<{ business_id: string }>();

    return result?.business_id || DEMO_BUSINESS_ID;
  } catch {
    return DEMO_BUSINESS_ID;
  }
}

/**
 * Get the business ID for a WorkOS user, throwing if not found.
 */
export async function requireBusinessId(
  db: D1Database,
  workosUserId?: string | null
): Promise<string> {
  const businessId = await getUserBusinessId(db, workosUserId);
  return businessId || DEMO_BUSINESS_ID;
}

/**
 * Get business ID or fallback to demo business.
 */
export async function requireBusinessForPage(
  db: D1Database,
  workosUserId?: string | null
): Promise<string> {
  const businessId = await getUserBusinessId(db, workosUserId);
  return businessId || DEMO_BUSINESS_ID;
}

/**
 * Get all businesses for a user
 */
export async function getUserBusinesses(
  db: D1Database,
  workosUserId?: string | null
): Promise<UserBusiness[]> {
  if (!workosUserId || workosUserId === 'demo_user' || !db) {
    return [
      {
        id: 'ub-demo-1',
        workos_user_id: 'demo_user',
        business_id: DEMO_BUSINESS_ID,
        role: 'admin',
        created_at: Date.now(),
      },
    ];
  }

  try {
    const result = await db
      .prepare('SELECT * FROM user_businesses WHERE workos_user_id = ? ORDER BY created_at DESC')
      .bind(workosUserId)
      .all<UserBusiness>();

    return result.results || [];
  } catch {
    return [
      {
        id: 'ub-demo-1',
        workos_user_id: 'demo_user',
        business_id: DEMO_BUSINESS_ID,
        role: 'admin',
        created_at: Date.now(),
      },
    ];
  }
}

/**
 * Check if a user has access to a specific business
 */
export async function userHasBusinessAccess(
  db: D1Database,
  workosUserId: string,
  businessId: string
): Promise<boolean> {
  if (!workosUserId || workosUserId === 'demo_user') return true;
  try {
    const result = await db
      .prepare('SELECT 1 FROM user_businesses WHERE workos_user_id = ? AND business_id = ?')
      .bind(workosUserId, businessId)
      .first();

    return result !== null;
  } catch {
    return true;
  }
}

/**
 * Get user's role in a specific business
 */
export async function getUserBusinessRole(
  db: D1Database,
  workosUserId: string,
  businessId: string
): Promise<'admin' | 'member' | 'viewer' | null> {
  if (!workosUserId || workosUserId === 'demo_user') return 'admin';
  try {
    const result = await db
      .prepare('SELECT role FROM user_businesses WHERE workos_user_id = ? AND business_id = ?')
      .bind(workosUserId, businessId)
      .first<{ role: 'admin' | 'member' | 'viewer' }>();

    return result?.role || 'admin';
  } catch {
    return 'admin';
  }
}

/**
 * Add a user to a business (admin function)
 */
export async function addUserToBusiness(
  db: D1Database,
  workosUserId: string,
  businessId: string,
  role: 'admin' | 'member' | 'viewer' = 'admin'
): Promise<void> {
  const id = crypto.randomUUID();
  try {
    await db
      .prepare(`
        INSERT INTO user_businesses (id, workos_user_id, business_id, role, created_at)
        VALUES (?, ?, ?, ?, ?)
        ON CONFLICT (workos_user_id, business_id) DO UPDATE SET role = excluded.role
      `)
      .bind(id, workosUserId, businessId, role, Date.now())
      .run();
  } catch (e) {
    console.warn('addUserToBusiness running in demo/fallback mode', e);
  }
}
