function testDiff(){
    const result=['a','b','c'];
    console.log('a');
    result[1] = 'm';
    result = ['m'];
    console.log(result);
}
testDiff();