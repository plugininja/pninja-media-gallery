<?php

namespace Pnpnd\NG\Traits;

defined( 'ABSPATH' ) || exit( 'No direct script access allowed' );
/**
 * Singleton trait — mix into any class that should have only one instance.
 */
trait Singleton {

	/** @var static[] */
	private static $instances = array();

	/**
	 * Return (or create) the single class instance.
	 *
	 * @return static
	 */
	public static function get_instance() {
		$class = static::class;
		if ( ! isset( self::$instances[ $class ] ) ) {
			self::$instances[ $class ] = new static();
		}
		return self::$instances[ $class ];
	}

	/** Prevent direct construction. */
	private function __construct() {}

	/** Prevent cloning. */
	private function __clone() {}

	/** Prevent unserialization. */
	public function __wakeup() {
		throw new \Exception( 'Singleton cannot be unserialized.' );
	}
}
