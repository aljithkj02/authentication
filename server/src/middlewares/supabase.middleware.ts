import { createClient } from "@supabase/supabase-js";

const supabaseurl = process.env.SUPA_URL || '';
const supabaseAnonkey = process.env.SUPA_BASE_KEY || '';

// const supabase = createClient(supabaseurl, supabaseAnonkey);

export const getSupaUser = async (token: string) => {
    try {
        // const res = await supabase.auth.getUser(token);
        let res: any;
        
        if (res.error) {
            return {
                status: false,
                message: res.error.message
            }
        }
        return {
            status: true,
            data: {
                name: res.data.user?.user_metadata.name,
                id: res.data.user?.id,
                email: res.data.user?.email,
                createdAt: res.data.user?.created_at
            }
        }
    } catch (error) {
        return {
            status: false,
            message: (error as Error).message
        }
    }
}