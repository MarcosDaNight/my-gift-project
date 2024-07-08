import {supabase} from '../supabaseClient';

export const fetchMessages = async () => {
    const { data, error } = await supabase
        .from('messages')
        .select('*');
    if (error) {
        console.error("Error fetching messages:", error);
        return [];
    }
    return data;
};

export const addMessage = async (name, message) => {
    const { error } = await supabase
        .from('messages')
        .insert([{ name, message }]);
    if (error) {
        console.error("Error adding message:", error);
        return false;
    }
    return true;
};

export const deleteAllMessages = async () => {
    const { error } = await supabase
        .from('messages')
        .delete()
        .neq('id', '');  // Remove todas as mensagens
    if (error) {
        console.error("Error deleting messages:", error);
        return false;
    }
    return true;
};
