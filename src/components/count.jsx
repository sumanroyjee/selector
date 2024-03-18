
import { atom, selector } from 'recoil';

export const myNetwork = atom({
    key:"myNetwork",
    default: 104
});
   
export const jobs = atom({
    key:"jobs",
    default: 0
});
   
export const messages = atom({
    key:"messages",
    default: 0
});
   
export const notification = atom({
    key:"notification",
    default: 103
});

export const totalnotification = selector({
    key:"totalnotification",
    get: ({get}) =>{
        const  myNetworkCount = get(myNetwork);
        const  jobsCount = get(jobs);
        const  messagesCount = get(messages);
        const  notificationCount = get(notification);

        return myNetworkCount + jobsCount + messagesCount + notificationCount;



    }
})