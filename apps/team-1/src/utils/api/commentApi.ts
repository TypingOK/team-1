
import { commentsTypes } from '@/types';
import { pb } from ".";

// fetch a paginated records list
// export const resultList = await pb.collection('comments').getList(1, 50, {
//     filter: 'created >= "2022-01-01 00:00:00" && someField1 != someField2',
// });

export const handleGetLogComments = async (logId: string) : Promise<commentsTypes[]> =>
await pb.collection('comments').getFullList({
    filter: `logId.id='${logId}'`,
    sort: 'created',
});

export const handleCreateComment = async (comment : commentsTypes) =>
await pb.collection('comments').create(comment);

export const handleDeleteComment = async(recordID: string) => await pb.collection('comments').delete(recordID);

export const handleUpdateComment = async(recordID: string, updateComment : commentsTypes) =>  
await pb.collection('comments').update(recordID, updateComment);