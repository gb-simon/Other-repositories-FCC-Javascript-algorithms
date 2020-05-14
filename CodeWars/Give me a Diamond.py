def diamond(n):

    if n < 1 or not n % 2:
        # n is negative or even
        return None
    s = ''
    for i in range(n):
        # Build asterisks for the line
        ast = '*'*(i*2 + 1) if i <= n/2 else '*'*((n-i)*2 - 1)
        # Add a line
        s += ' '*int((n-len(ast)) / 2) + ast + '\n'
    return s

print(diamond(5))
print(diamond(2))
