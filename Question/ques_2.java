public class ques_2 {
    public static void main(String[] args) {
        int result = sums(5);
        System.out.println(result);
    }

    static int sums(int x) {
        if (x > 0) {
            return x + sums(x - 1);
        } else {
            return 0;
        }

    }
    // static Double mydouble(double x, double y){
    // return x + y;
    // }
    // static int myint(int x, int y){
    // return x + y;
    // }
    // double num2 = mydouble(5.5, 2.2);
    // int num1 = myint(5, 5);

    // System.out.println(num1);
    // System.out.println(num2);

    // static int sumof(int x, int y){
    // return x + y;
    // }

    // static void checkAge(int age) {
    // if (age >= 18) {
    // System.out.println("You are " + age + " You can go!");
    // } else {
    // System.out.println("You are " + age + " You can't go!!!");
    // }
    // }
}
