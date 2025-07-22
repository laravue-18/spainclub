'use server'
 
import { cookies } from 'next/headers'
 
export async function deleteFlash() {
  (await cookies()).set('flash', '', { maxAge: 0 })
}