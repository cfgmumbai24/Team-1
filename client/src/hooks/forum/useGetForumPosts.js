import { useQuery } from "@tanstack/react-query";


export default function useGetForumPosts(isEnglish){
    const { data: posts, isLoading: isGettingPosts } = useQuery({
        queryFn: () => getAllPosts(isEnglish),
        queryKey: ['recipes']
    });

    return { posts, isGettingPosts};
}       

 async function getAllPosts(isEnglish){
    const lang = isEnglish ? "English" : "Hindi";

    try {
        const res = await fetch(`/api/forum/0/10/${lang}`);
        const data = await res.json();
        if (!res.ok) {
            throw new Error(data.error || 'Failed to fetch recipes');
        }

        return data;
    } catch (error) {
        console.error(error.message);
        throw new Error('Failed to fetch recipes');
    } 
}