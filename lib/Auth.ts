//
import auth from "@lib/Firebase";

// Log Out
async function logout(): Promise<void>
{
  if (auth.currentUser)
  {
    await auth.signOut();
  }
}

export { logout };