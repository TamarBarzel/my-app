import {create} from 'zustand';
interface CounterStore{
    counter:number;
    add:()=>void;
}


const useStaticCounter= create <CounterStore>((set)=>({
    counter:0.5,
    add: ()=>
        set((state)=>({
            counter: state.counter + 0.5,
        }))
}));

export default useStaticCounter ;