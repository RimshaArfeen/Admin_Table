import { Chance } from 'chance';

const chance = Chance ();
export const FakeUserData = () => {
 console.log(chance.name({middle : true})) ;
 return(chance.name({middle : true})) ;
};

// FakeUserData();
