'use server'

import { createServerSupabaseAdminClient, createServerSupabaseClient } from "utils/supabase/server"

function handleError(error) {
    if (error) {
        console.error(error);
        throw error;
    }
}

export async function getAllMovies() {
    const supabase = await createServerSupabaseAdminClient()

    const { data, error } = await supabase
    .from("movie")
    .select("*")

    handleError(error)
    
    return data
}

export async function searchMovies(search = "") {
    const supabase = await createServerSupabaseAdminClient()

    const { data, error } = await supabase
    .from("movie")
    .select("*")
    .like("title", `${search}%`)

    handleError(error)
    
    return data
}

export async function getMovie(id) {
    const supabase = await createServerSupabaseClient()

    const {data, error} = await supabase
    .from('movie')
    .select('*')
    .eq('id', id)
    .maybeSingle()

    handleError(error)

    return data;
}