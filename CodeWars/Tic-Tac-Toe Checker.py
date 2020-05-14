def isSolved(board):
  # TODO: Check if the board is solved!
  #only 4 lines of code!!
  old=board[:]
  #replace all 0s with 100s
  board = [[x if x!=0 else 100 for x in b] for b in board]
  #list containing sum of rows, cols, diags
  p=[sum(i) for i in zip(*board)] + [sum(i) for i in board] + \
    [sum([r[i] for i, r in enumerate(board)])] + \
    [sum([r[-i-1] for i, r in enumerate(board)])]

  return [[(0,-1)[old!=board],2][6 in p],1][3 in p]