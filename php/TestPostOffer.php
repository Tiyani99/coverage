<?php

class TestPostOffer extends PHPUnit\Framework\TestCase {

    public function testOfferTitle() {
        include_once 'post_offer.php';

        $this->assertEquals($offer_title, "Software Developer");
    }

    public function testOfferType() {
        include_once 'post_offer.php';

        $this->assertContains($offe_type, 'Full-time Job');
    }

    public function testSalary() {
        include_once 'post_offer.php';

        $this->assertEquals($$salary_minimum, 'R5000.00');
        $this->assertEquals($salary_maximum, 'R30000.00');
    }

    
}