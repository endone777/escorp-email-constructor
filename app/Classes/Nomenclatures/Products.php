<?php

namespace App\Classes\Nomenclatures;

class Products {

    public $composite = null;
    public $images = [];
    public $type = '';
    public $default_types = [];

    /**
     * @return array
     */
    public function getDefaultTypes(): array
    {
        return $this->default_types;
    }

    /**
     * @param array $default_types
     */
    public function setDefaultTypes(array $default_types): void
    {
        $this->default_types = $default_types;
    }

    /**
     * @return string
     */
    public function getType(): string
    {
        return $this->type;
    }

    /**
     * @param string $type
     */
    public function setType(string $type): void
    {
        $this->type = $type;
    }

    /**
     * @return array
     */
    public function getImages(): array
    {
        return $this->images;
    }

    /**
     */
    public function setImages($images): void
    {
        $this->images = $images;
    }

    /**
     * @return null
     */
    public function getComposite()
    {
        return $this->composite;
    }

    /**
     * @param null $composite
     */
    public function setComposite($composite): void
    {
        $this->composite = $composite;
    }


}