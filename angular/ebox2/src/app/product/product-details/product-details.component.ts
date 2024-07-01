import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  //Fill your code here
  @Input() product: Array<{ id: number; name: string; imageUrl: string }> = [];

  productDetails = [
    {
      id: 1,
      description:
        'Classic Watches - Buy Classic Watches at India Best Online Shopping Store. Check Price in India and Shop Online. Free Shipping  Cash on Delivery ...',
    },
    {
      id: 2,
      description:
        'Apple MacBook Air Core i5 5th Gen - (8 GB/128 GB SSD/Mac OS Sierra) MQD32HN/A A1466 (13.3 inch, Silver, 1.35 kg) Starts from 60 dollars Cash on Delivery ...',
    },
    {
      id: 3,
      description:
        'The iPhone Xs is in tune with beloved versions of previous Apple mobile phones in the sense that it is built in privacy and security from the very beginning. Cash on delivery...',
    },
    {
      id: 4,
      description:
        'The iPhone XR has arrived to stun our senses with a host of features such as the Liquid Retina Display, a faster Face ID, and the powerful A12 Bionic Chip.',
    },
    {
      id: 5,
      description:
        'Apple MacBook Air Core i5 5th Gen - (8 GB/128 GB SSD/Mac OS Sierra) MQD32HN/A A1466 (13.3 inch, Silver, 1.35 kg) Starts from 60 dollars Cash on Delivery ...',
    },
    {
      id: 6,
      description:
        "When the perfect moment occurs, you need the right piece of equipment by your side to capture it. And, you can't always carry a bulky DSLR camera around",
    },
    {
      id: 7,
      description:
        '13MP+2MP dual rear camera with AI beauty, HDR, background blur, sticker, filter | 16MP front facing camera 15.8 centimeters (6.2-inch) HD + in-cell capacitive touchscreen',
    },
    {
      id: 8,
      description:
        'Featuring our largest display ever and a resilient glass back, the OnePlus 6T was crafted with care and purpose. Experience a 6.41 inch Optic AMOLED display.',
    },
  ];
  description = '';

  constructor() {}

  ngOnInit() {}
  selectedProductId: number | null = null;
  showDescription(id) {
    //Fill your code here
    this.selectedProductId = id;
  }

  getDescription(productId: number): string {
    const product = this.productDetails.find((p) => p.id === productId);
    return product ? product.description : '';
  }
}
