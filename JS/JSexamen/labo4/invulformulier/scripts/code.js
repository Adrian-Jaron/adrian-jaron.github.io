
const setup = () => {
    let s1 = "blabla"
    let s2 = new String(s1);
    console.log(typeof s1);
    console.log(typeof s2);

    console.log(s2.length);
    console.log(s1.charAt(2));
}

setup();