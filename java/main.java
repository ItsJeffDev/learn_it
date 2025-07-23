public class main {
    public static void main(String[] args) {
        int[][] nums = {{1,2,3,4,5,6,7,8,9,10}, {11,12,13,14,15,16,17,18,19,20}};
        for (int[] x : nums){
            for (int i : x){
                if (i == 6){
                    continue;
                } else {
                    System.out.println(i);
                }
            }
        }
    }
}