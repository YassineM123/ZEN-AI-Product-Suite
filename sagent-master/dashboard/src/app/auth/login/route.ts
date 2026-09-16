/**
 * Login Route
 *
 * Redirects to WorkOS hosted sign-in page.
 * Users can sign in with email/password or social providers.
 */

import { redirect } from 'next/navigation';

export const GET = async () => {
  if (process.env.WORKOS_API_KEY && process.env.WORKOS_CLIENT_ID) {
    try {
      const { getSignInUrl } = await import('@workos-inc/authkit-nextjs');
      const signInUrl = await getSignInUrl();
      return redirect(signInUrl);
    } catch {
      return redirect('/');
    }
  }
  return redirect('/');
};
