const solution = (box, n) => box.map(a => a/n<<0).reduce((a,b) => a*b,1)
