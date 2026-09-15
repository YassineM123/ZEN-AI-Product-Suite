import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}));
    const email = body.email || "executive@zen-groupe.fr";
    const name = body.name || "Alexandre Mercier";

    return NextResponse.json({
      access_token: "zen_executive_jwt_token_2026",
      refresh_token: "zen_executive_refresh_token_2026",
      user: {
        email,
        name,
        role: "admin",
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Signup failed" },
      { status: 500 }
    );
  }
}
