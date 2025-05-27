import { NextRequest, NextResponse } from "next/server";
import { Pool } from "pg";

// Configuración del Pool de conexión a PostgreSQL
const pool = new Pool({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: parseInt(process.env.PG_PORT || "5432", 10),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const mail = body.value.email;

    const query = "INSERT INTO emails (email) VALUES ($1) RETURNING *";
    const values = [mail];

    const client = await pool.connect();

    try {
      await client.query(query, values);
    } finally {
      client.release();
    }

    await fetch(`http://notification:8084/mail/send?email=${mail}`, {
      method: "GET",
    });

    return NextResponse.json({ data: body }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
