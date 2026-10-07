import java.util.*;
public class decimaltobinary2 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        StringBuilder binary = new StringBuilder();
        while (n > 0) {
            int rem = n % 2;
            binary.append(rem);
            n = n / 2;
        }
        binary.reverse();
        System.out.println("Binary: " + binary);
    }
}