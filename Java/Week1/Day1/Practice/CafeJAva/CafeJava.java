public class CafeJava {
    public static void main(String[] args) {
        // APP VARIABLES
        // Lines of text that will appear in the app. 
        String generalGreeting = "Welcome to Cafe Java, ";
        String pendingMessage = ", your order will be ready shortly";
        String readyMessage = ", your order is ready";
        String displayTotalMessage = "Your total is $";
        
        // Menu variables (add yours below)
        // double mochaPrice = 3.5;
        // double dripCoffeePrice = 2.5;
        // double lattePrice = 2.75;
        // double cappuccino = 3.25;
        double mochaPrice = 3.5;
        double dripCoffeePrice = 3.4;
        double lattePrice = 3;
        double cappuccino = 3.25;
    
        // Customer name variables (add yours below)
        String customer1 = "Cindhuri";
        String customer2 = "Sam";
        String customer3 = "Jimmy";
        String customer4 = "Noah";

    
        // Order completions (add yours below)
        // boolean isReadyOrder1 = false;
        // boolean isReadyOrder2 = true;
        // boolean isReadyOrder3 = true;
        // boolean isReadyOrder4 = false;
        boolean isReadyOrder1 = true;
        boolean isReadyOrder2 = false;
        boolean isReadyOrder3 = false;
        boolean isReadyOrder4 = true;
    
        // APP INTERACTION SIMULATION (Add your code for the challenges below)
        // Example:
        System.out.println(isReadyOrder1 ? generalGreeting + customer1 +readyMessage+dripCoffeePrice:generalGreeting + customer1 + pendingMessage); // Displays "Welcome to Cafe Java, Cindhuri"
    	// ** Your customer interaction print statements will go here ** //
        System.out.println(isReadyOrder4 ? generalGreeting+customer4+readyMessage+displayTotalMessage+cappuccino : generalGreeting+customer4+pendingMessage);
        System.out.println(isReadyOrder2 ? generalGreeting+customer2+readyMessage+displayTotalMessage+2*lattePrice : generalGreeting+customer2+pendingMessage);
        // isReadyOrder2 = false;
        isReadyOrder2 = true;
        System.out.println(isReadyOrder2 ? generalGreeting+customer2+readyMessage+displayTotalMessage+2*lattePrice : generalGreeting+customer2+pendingMessage);
        System.out.println(generalGreeting+customer3+displayTotalMessage+ (lattePrice-dripCoffeePrice) );


    }
}
