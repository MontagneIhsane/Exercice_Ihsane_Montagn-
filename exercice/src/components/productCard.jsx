import './productCard.css';

export function ProductCard() {
return (
    <article>
    <header>
        <h2>Algeria Jersey</h2>
    </header>
    <div>
        <img src='maillot.jpg' alt="Description of the product" />
    </div>
    <section>
        <p>Price: $59.99</p>
    </section>
    <div class="size">
                <ul class="product_size">
                <li class="size_1">
                    <input type="radio" name="options" id="size_1" value="40"/>
                    <label for="size_1">40</label>
                </li>
                <li class="size_1">
                    <input type="radio" name="options" id="size_2" value="41"/>
                    <label for="size_2">41</label>
                </li>
                <li class="size_1">
                    <input type="radio" name="options" id="size_3" value="42"/>
                    <label for="size_3">42</label>
                </li>
                <li class="size_1">
                    <input type="radio" name="options" id="size_4" value="43"/>
                    <label for="size_4">43</label>
                </li>
                <li class="size_1">
                    <input type="radio" name="options" id="size_5" value="44"/>
                    <label for="size_5">44</label>
                </li>
                <li class="size_1">
                    <input type="radio" name="options" id="size_6" value="45"/>
                    <label for="size_6">45</label>
                </li>
                <li class="size_1">
                    <input type="radio" name="options" id="size_7" value="46"/>
                    <label for="size_7">46</label>
                </li>
                </ul>
            </div>
    <footer>
        <button>Add to Cart</button>
    </footer>
    </article>
    
);
}
