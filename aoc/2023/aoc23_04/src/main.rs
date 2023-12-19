use std::fs;
use std::error::Error;
use std::str::FromStr;


#[derive(Debug)]
struct Card {
    id: usize,
    winning_numbers: [i32; 10],
    selected_numbers:  [i32; 25],
}

impl FromStr for Card {
    type Err = &'static str;

    fn from_str(s: &str) -> Result<Self, Self::Err> {
        let parts: Vec<&str> = s.split(|c| c == ':' || c == '|' || c == ' ').filter(|&c| c != "").collect();
        if parts.len() != 37 {
            return Err("Invalid")
        }

        let id: usize = parts[1].parse().expect("could not parse id");

        let mut winning_numbers = [0; 10];
        for (i, val) in parts[2..12].iter().enumerate() {
            winning_numbers[i] = val.parse().map_err(|_| "failed")?;
        }

        let mut selected_numbers = [0; 25];
        for (i, val) in parts[12..=36].iter().enumerate() {
            selected_numbers[i] = val.parse().map_err(|_| "failed")?;
        }

        // let mut winning_numbers = [0; 5];
        // for (i, val) in parts[2..7].iter().enumerate() {
        //     winning_numbers[i] = val.parse().map_err(|_| "failed")?;
        // }
        //
        // let mut selected_numbers = [0; 8];
        // for (i, val) in parts[7..].iter().enumerate() {
        //     selected_numbers[i] = val.parse().map_err(|_| "failed")?;
        // }

        Ok(Card {
            id,
            winning_numbers,
            selected_numbers,
        })
    }
}

fn main() -> Result<(), Box<dyn Error>> {
    let file = fs::read_to_string("input.txt")?.parse::<String>()?;

    let total = part_two(&file);
    println!("Total: {}", total);

    Ok(())
}

fn part_two(file: &String) -> i32 {

    let mut total = 0;

    //should be extra space
    let mut multiplier = [0,0,0,0,0,0,0,0,0,0,0];
    'outer: for (i, x) in file.lines().enumerate() {

        let some_card = x.parse::<Card>();

        match some_card {
            Ok(card) => {

                let id = card.id;
                let winning_numbers = card.winning_numbers;
                let selected = card.selected_numbers;

                let common: Vec<i32> = winning_numbers.iter().filter(|&x| selected.contains(x)).cloned().collect();

                let num = common.len();

                // if any matches..

                let copies = multiplier[0] + 1;

                total += copies;

                //increment
                for n in 1..=num {
                    multiplier[n] += copies;
                }

                //move values to left;
                for x in 1..=10 {
                    multiplier[x-1] = multiplier[x];
                }
                multiplier[10] = 0;
            },
            Err(_) => println!("broken"),
        }

    };

    total

}

fn part_one(file: &String) -> i32 {
    let mut total = 0;

    for (i, x) in file.lines().enumerate() {

        let some_card = x.parse::<Card>();

        match some_card {
            Ok(card) => {

                let winning_numbers = card.winning_numbers;
                let selected = card.selected_numbers;

                let common: Vec<i32> = winning_numbers.iter().filter(|&x| selected.contains(x)).cloned().collect();

                let num = common.len();
                let base: i32 = 2;

                if num > 0 {
                    let score = base.pow(num as u32 -1);
                    total += score;
                }
            },
            Err(_) => println!("broken"),
        }

    };

    total

}
