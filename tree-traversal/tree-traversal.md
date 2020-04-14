## BFS vs DFS

time complexity는 똑같다(모든 node를 한번씩 방문)

space complexity가 문제

* 너비가 긴 tree -> BFS로 할경우 queue크기가 너무 커진다 -> space complexity 문제

* 깊이가 긴 tree -> DFS로 할경우 함수 call stack이 너무 커진다 -> space complexity 문제

<hr>

## DFS

BST에서 sorted list를 구하고 싶으면 inorder
tree를 복사, list에 저장하고 싶으면 preorder(list의 첫번째 element가 root node임)