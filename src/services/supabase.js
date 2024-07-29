import { createClient } from '@supabase/supabase-js'

export const supabaseUrl = 'https://civqezndocvlgyoscexz.supabase.co'
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNpdnFlem5kb2N2bGd5b3NjZXh6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTYxNDE2MzMsImV4cCI6MjAzMTcxNzYzM30.DKwr27F0CUDHObFMgvs6WCvDIDloYeTb26Ur89ZXsFE'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase
