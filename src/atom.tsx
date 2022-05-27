import {atom, selector} from 'recoil'

export const minuteState = atom({
    key:'minutes',
    default : 0,
}) 

export const hourSelector = selector<number>({
    key:'hours',
    //여기서 뭘 return 하든지 hourSelector이 될거임
    // 만약 selector 안에서 atom에 접근하고 싶다면 
    // ({get}) =>{} get 함수 사용하면 된다. 이건 atom의 값 가져오게끔 하는 함수임 
    get:({get}) =>{
        const minutes = get(minuteState);
        return minutes/ 60;
    },
    // atom 수정하는걸 도와줌, 원하는 state 가 어떤것이든지 그걸로 수정해줌
    set:({set}, newValue) =>{
        const minutes = Number(newValue) * 60;
        set(minuteState, minutes) //수정하고 싶은 recoil atom , 새로운 값 
        // set(minuteState, 10)
    }
})