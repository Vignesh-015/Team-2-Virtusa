
import java.util.*;

class Node {
    int data;
    Node left, right;

    Node(int data) {
        this.data = data;
    }
}

public class BalancedTree {

    static Node buildTree(Scanner sc) {
        System.out.print("Enter root value (-1 for empty tree): ");
        int value = sc.nextInt();

        if (value == -1) {
            return null;
        }

        Node root = new Node(value);
        Queue<Node> queue = new LinkedList<>();
        queue.add(root);

        while (!queue.isEmpty()) {
            Node current = queue.poll();

            System.out.print("Enter left child of " + current.data + " (-1 for none): ");
            int leftValue = sc.nextInt();

            if (leftValue != -1) {
                current.left = new Node(leftValue);
                queue.add(current.left);
            }

            System.out.print("Enter right child of " + current.data + " (-1 for none): ");
            int rightValue = sc.nextInt();

            if (rightValue != -1) {
                current.right = new Node(rightValue);
                queue.add(current.right);
            }
        }

        return root;
    }

    static int height(Node root) {
        if (root == null) {
            return 0;
        }

        int leftHeight = height(root.left);
        if (leftHeight == -1) {
            return -1;
        }

        int rightHeight = height(root.right);
        if (rightHeight == -1) {
            return -1;
        }

        if (Math.abs(leftHeight - rightHeight) > 1) {
            return -1;
        }

        return Math.max(leftHeight, rightHeight) + 1;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        Node root = buildTree(sc);

        if (height(root) == -1) {
            System.out.println("The binary tree is not balanced.");
        } else {
            System.out.println("The binary tree is balanced.");
        }

        sc.close();
    }
}
