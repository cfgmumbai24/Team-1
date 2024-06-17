import { useQuery } from "@tanstack/react-query";

// http://localhost:5001/api/comments/666d8b83594f0373d667b467/English
export default function useGetComments(isEnglish, id){
    const { data: comments, isLoading: isGettingComments } = useQuery({
        queryFn: () => getComments(isEnglish, id),
        queryKey: ['comments']
    });

    return { comments, isGettingComments};
}       

 async function getComments(isEnglish, id){
    const lang = isEnglish ? "English" : "Hindi";

    try {
        const res = await fetch(`/api/comments/${id}/${lang}`);
        const data = await res.json();
        if (!res.ok) {
            throw new Error(data.error || 'Failed to fetch comments');
        }

        return data;
    } catch (error) {
        console.error(error.message);
        throw new Error('Failed to fetch comments');
    } 
}