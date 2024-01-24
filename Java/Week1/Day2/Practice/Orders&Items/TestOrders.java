import java.util.ArrayList;
public class TestOrders {
    public static void main(String[] args) {
    
        // Menu items
        Item item1=new Item("pizza",16.5);
        Item item2=new Item("pinsa",12.5);
        Item item3=new Item("sandwich",9.5);
        Item item4=new Item("calzone",15);
        // Order variables -- order1, order2 etc.
        Order order1= new Order();
        Order order2= new Order();
        Order order3= new Order();
        Order order4= new Order();
        
        order1.name="cindhuri";
        order2.name="Jimmy";
        order3.name="noah";
        order4.name="Sam";

        order2.items.add(item1);
        order2.total+=item1.price;


        order3.items.add(item4);
        order3.total+=item4.price;
        order4.items.add(item2);
        order4.total+=item2.price;
        order1.ready=true;
        order4.items.add(item2);
        order4.items.add(item2);
        order4.total+=item2.price*2;
        order2.ready=true;

        // Application Simulations
        // Use this example code to test various orders' updates
        System.out.printf("Name: %s\n", order1.name);
        System.out.printf("Total: %s\n", order1.total);
        System.out.printf("Ready: %s\n", order1.ready);
        System.out.printf("Name: %s\n", order2.name);
        System.out.printf("Total: %s\n", order2.total);
        System.out.printf("Ready: %s\n", order2.ready);
    }
}
