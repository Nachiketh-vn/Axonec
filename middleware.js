import { updateSession } from "/app/utils/supabase/middleware";

export async function middleware(request) {
  return await updateSession(request);
}

export const config = {
  matcher: ["/profile/:id*","/tasks/:path*"],
};
