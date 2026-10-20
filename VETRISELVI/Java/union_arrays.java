import java.util.*;

public class union_arrays {

    public static void main(String args[]) {

        Scanner sc = new Scanner(System.in);

        System.out.println("Enter length of arr1:");
        int n1 = sc.nextInt();

        System.out.println("Enter length of arr2:");
        int n2 = sc.nextInt();

        int arr1[] = new int[n1];
        int arr2[] = new int[n2];

        System.out.println("Enter elements of arr1:");

        for (int i = 0; i < n1; i++) {
            arr1[i] = sc.nextInt();
        }

        System.out.println("Enter elements of arr2:");

        for (int i = 0; i < n2; i++) {
            arr2[i] = sc.nextInt();
        }

        int union[] = new int[n1 + n2];
        int k = 0;
        for (int i = 0; i < n1; i++) {
            union[k] = arr1[i];
            k++;
        }
        for (int i = 0; i < n2; i++) {

            boolean found = false;
            for (int j = 0; j < k; j++) {

                if (union[j] == arr2[i]) {
                    found = true;
                    break;
                }
            }
            if (!found) {
                union[k] = arr2[i];
                k++;
            }
        }
        System.out.println("Union of arrays:");

        for (int i = 0; i < k; i++) {
            System.out.print(union[i] + " ");
        }
    }
}