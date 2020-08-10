<?php

class TestPlaceEvents extends PHPUnit\Framework\TestCase {
    
    public function testInputFields() {

        include_once 'place_events.php';

        $this->assertEquals($company_name, 'Coronation Fund Managers');
        $this->assertEquals($name_contact_person, 'Sakhile Mabunda');
        $this->assertEquals($email_address, 'selebrate22@gmail.com');
        $this->assertEquals($phone_number, '0715398516');
    }

}

?>