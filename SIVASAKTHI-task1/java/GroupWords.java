import java.util.*;

public class GroupWords {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();

        Map<Character, List<String>> map = new TreeMap<>();

        for (int i = 0; i < n; i++) {

            String word = sc.next();
            char first = word.charAt(0);

            map.putIfAbsent(first, new ArrayList<>());
            map.get(first).add(word);
        }

        System.out.println(map);

        sc.close();
    }
}