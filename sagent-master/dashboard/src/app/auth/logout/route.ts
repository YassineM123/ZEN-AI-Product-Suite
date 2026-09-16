/**
 * Logout Route
 *
 * Signs out the user and clears the session.
 * Redirects to the landing page after logout.
 */

import { signOut } from '@workos-inc/authkit-nextjs';
import { redirect } from 'next/navigation';

export const GET = async (request: Request) => {
  if (process.env.WORKOS_API_KEY && process.env.WORKOS_CLIENT_ID) {
    try {
      const { signOut } = await import('@workos-inc/authkit-nextjs');
      await signOut();
    } catch {
      // Ignore in demo / fallback mode
    }
  }
  return redirect('/');
};
