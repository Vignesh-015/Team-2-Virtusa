import java.util.*;
public class removeCharacter{
  public static void main(String args[]){
      Scanner sc = new Scanner(System.in);
      String s = sc.nextLine();
      LinkedHashSet<Character> set = new LinkedHashSet<>();
      for(char c : s.toCharArray()){
          set.add(c);
      }
      StringBuilder res = new StringBuilder();
      for(char c : set){
          res.append(c);
      }
      System.out.println(res);
  }
}