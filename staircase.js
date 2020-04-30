function staircase(n) {
    var s = '';
 for (let i = 1; i <= n; i++) {
         s += ' '.repeat(n - i) + '#'.repeat(i)  + '\n';
 }
 console.log(s);
}

