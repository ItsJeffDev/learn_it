import java.util.Scanner;
public class Main {
	public static void main (String args[]) {
		Scanner sc = new Scanner(System.in);
		
		int menu, age = 0;
		int product = 0;
		double total_sales = 0;
		
        String[] names = new String[50];
        int[] ages = new int[50];
        double[] prices = new double[50];
        int purchaseCount = 0;

		int avengersCount = 0;
		int frozenCount = 0;
		int spidermanCount = 0;


		boolean system = true;
		while(system) {
			System.out.println("--- Movie Ticket POS ---");
			System.out.println("[1] Buy");
			System.out.println("[2] View Sales Report");
			System.out.println("[3] Exit");
			System.out.print("Choose an option: ");
			menu = sc.nextInt();
			sc.nextLine();
			System.out.println("------------------------");
			switch(menu) {
			case 1:
				boolean prod_menu = true;
				double single_sale = 0;
				while(prod_menu) {
					String name = "";
					double total = 0;
					int price = 0;
					
					System.out.println("--------------------------------------");
					System.out.println("");
					System.out.println("[1] Avengers:Endgame         300Pesos ");
					System.out.println("[2] Frozen II                250Pesos ");
					System.out.println("[3] Spider-Man:No Way Home   280Pesos ");
					System.out.println("[0] Exit Movie");
					System.out.print("Enter Movie: ");
					product = sc.nextInt();
					
					switch(product) {
						case 1:
							price = 300;
							break;
						case 2:
							price = 250;
							break;
						case 3:
							price = 280;
							break;
						case 0:
							total_sales +=  single_sale;
							prod_menu = false;
							break;
						default:
							System.out.println("Invalid Product!");
							break;
					}
					
					if(product == 1 || product == 2 || product == 3) {
						sc.nextLine();
						System.out.print("Name: ");
						name = sc.nextLine();
						System.out.print("Age: ");
						age = sc.nextInt();
						sc.nextLine();
						if (age >= 60){
							total += price * 0.50;
						} else if (age <= 18){
							total += price * 0.88;
						} else {
							total += price;
						}
						
						if (product == 1) {
							avengersCount++;
						} else if (product == 2) {
							frozenCount++;
						} else if (product == 3) {
							spidermanCount++;
						}

						single_sale += total;

						names[purchaseCount] = name;
						ages[purchaseCount] = age;
						prices[purchaseCount] = total;
						purchaseCount++;
						
						System.out.println("Total Price:"+ single_sale);
						System.out.println("-----------------");

						System.out.print("Do you want to buy another ticket? (y/n): ");
						String again = sc.nextLine();
						if (!again.equalsIgnoreCase("y")) {
							total_sales += single_sale;
							prod_menu = false;
						}
					}
				}
			break;
			
			case 2:
			System.out.println("--- Sales Report ---");
			    for(int i = 0; i < purchaseCount; i++){
					System.out.println("Name: " + names[i]);
                    System.out.println("Age: " + ages[i]);
                    System.out.println("Final Price: " + prices[i] + " Pesos");
					System.out.println("------------------------");
				}
				System.out.println("Total tickets Sold: " + purchaseCount);
				System.out.println("Total Sales:" + total_sales);

				System.out.println();
				    System.out.println("Tickets Sold Per Movie:");
    				System.out.println("Avengers: Endgame - " + avengersCount);
    				System.out.println("Frozen II - " + frozenCount);
    				System.out.println("Spider-Man: No Way Home - " + spidermanCount);
    				System.out.println("------------------------");
    				System.out.println("Total tickets Sold: " + purchaseCount);
    				System.out.println("Total Sales: " + total_sales);
			break;
				
			case 3:
				system = false;
				
			break;
			
			default:
				System.out.println("Invalid Menu");
			break;
			
			}
		}	
	}
}