import java.util.Scanner;

public class Test{
  public static void main(String[] args) {
    Scanner scan = new Scanner(System.in);
    int i = scan.nextInt();
    int j = scan.nextInt();
    scan.close();
    int mul = i * j;
    System.out.println(mul);
    
  }
}