/**
 * Public client config for docs.cc3po.com native forms.
 * The anon key is public by design; Row Level Security is the boundary.
 * On docs_feedback and docs_support_requests, anon may INSERT only and
 * cannot read, update, or delete rows (verified 2026-11-25).
 */
export const SUPABASE_URL = 'https://cdrcgmdvepxwsbqaifxv.supabase.co';
export const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNkcmNnbWR2ZXB4d3NicWFpZnh2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM1MDY4MDksImV4cCI6MjA4OTA4MjgwOX0.pKWLWvsSimTOMkpaXKKrLJESrQEMUayUU1c9ANzr1Dc';
