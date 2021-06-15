const factorial = (num) => {
    let i = 0;
    while (i < 200000000) i++;
    if(num === 0)
        return 1;
    return num * factorial(num - 1);
}

export default factorial;