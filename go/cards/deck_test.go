package main

import (
	"os"
	"testing"
)

func TestNewDeck(t *testing.T) {
	d := newDeck()
	if len(d) != 52 {
		t.Errorf("Expect deck d length of 54 but got %d", len(d))
	}
	if d[0] != "Two of diamons" {
		t.Errorf("Expect Two of diamons, got %s", d[0])
	}
	if d[len(d)-1] != "King of clubs" {
		t.Errorf("Expect King of clubs, got %s", d[len(d)-1])
	}
}

func TestSaveToDeckAndNewDeckFromFile(t *testing.T) {
	os.Remove("_decktesting")
	deck := newDeck()
	deck.saveToFile("_decktesting")
	loadedDeck := newDeckFromFile("_decktesting")

	if len(loadedDeck) != 52 {
		t.Errorf("Expect deck d length of 54 but got %d", len(loadedDeck))
	}
	if loadedDeck[0] != "Two of diamons" {
		t.Errorf("Expect Two of diamons, got %s", loadedDeck[0])
	}
	if loadedDeck[len(loadedDeck)-1] != "King of clubs" {
		t.Errorf("Expect King of clubs, got %s", loadedDeck[len(loadedDeck)-1])
	}

	os.Remove("_decktesting")

}

func TestDeal(t *testing.T) {
	deck := newDeck()
	deck.shuffle()
	if len(deck) != 52 {
		t.Errorf("Expect deck d length of 54 but got %d", len(deck))
	}
	// random test
}
