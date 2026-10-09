import java.util.*;
public class PerfectNumber{
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        if (n<= 1){
            System.out.println("Not a Perfect Number");
            return;
        }
        int sum = 1;
        for (int i= 2;i*i <= n;i++){
            if (n % i == 0) {
                sum = sum + i;
                int pair = n / i;
                if (pair!= i) {
                    sum += pair;
                }
            }
        }
        if(sum == n){
            System.out.println("Perfect Number");
        } else{
             System.out.println("Not a Perfect Number");
        }
    }
}
