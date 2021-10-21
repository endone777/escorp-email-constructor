<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
//use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Asahasrabuddhe\LaravelMJML\Mail\Mailable;

class MJMLEmail extends Mailable
{
    use Queueable, SerializesModels;
    private String $_mjml;
    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($_mjml)
    {
        $this->_mjml = $_mjml;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        $mjml = $this->_mjml;
        return $this->mjml('api.mjml' , compact('mjml'));
    }
}
