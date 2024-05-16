CREATE TABLE IF NOT EXISTS "applications" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"email" text NOT NULL,
	"name" text NOT NULL,
	"pan" text NOT NULL,
	"mobile" text NOT NULL,
	"pincode" text NOT NULL,
	"checked" boolean DEFAULT false,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
