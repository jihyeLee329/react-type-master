import {atom, selector} from 'recoil'

export const minuteState = atom({
    key:'minutes',
    default : 0,
}) 

export const hourSelector = selector({
    key:'hours',
    //여기서 뭘 return 하든지 hourSelector이 될거임
    // 만약 selector 안에서 atom에 접근하고 싶다면 
    // ({get}) =>{} get 함수 사용하면 된다. 이건 atom의 값 가져오게끔 하는 함수임 
    get:({get}) =>{
        const minutes = get(minuteState);
        return minutes/ 60;
    }
})