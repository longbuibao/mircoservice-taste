package main

import (
	"fmt"
)

type contactInfo struct {
	email   string
	zipCode int
}

type person struct {
	firstName string
	lastName  string
	contactInfo
}

func main() {
	// alex := person{firstName: "alex", lastName: "andreson", contactInfo: contactInfo{
	// 	email:   "hello@gmail.com",
	// 	zipCode: 1000,
	// }}
	// alex.print()
	// alex.updateFirstName("DUDE")
	// alex.print()
	name := "bill"

	namePointer := &name

	fmt.Println(&namePointer)
	fmt.Println(name)
	printPointer(namePointer)
	fmt.Println(name)
}
func printPointer(namePointer *string) {
	(*namePointer) = "hej"
	fmt.Println(&namePointer)
}

func (p *person) updateFirstName(newFirstName string) {
	(*p).firstName = newFirstName
}

func (p person) print() {
	fmt.Printf("\n%+v\n", p)
}
