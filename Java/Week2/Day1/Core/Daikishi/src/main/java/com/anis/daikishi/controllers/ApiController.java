package com.anis.daikishi.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;



@RestController
@RequestMapping("/daikishi")
public class ApiController {
	
	@GetMapping("")
	public String home() {
		return "Welcome!";
	}
	@GetMapping("/today")
	public String today() {
		return "Today you will find luck in all your endeavors!";
	}
	@GetMapping("/tomorrow")
	public String tomorrow() {
		return "Tomorrow, an opportunity will arise, so be sure to be open to new ideas!";
	}
	@GetMapping("/travel/{city}")
	public String travel(@PathVariable("city") String city) {
		return "Congratulations! You will soon travel to "+city+"!";
	}
	@GetMapping("/lotto/{num}")
	public String lotto(@PathVariable("num") int num) {
		if(num%2==0) {return "You will take a grand journey in the near future,but weary of tempting offers";}
		return "You have enjoyed the fruits of your labor but now is a great time to spend time with family and friends";
	}
	
	
}
