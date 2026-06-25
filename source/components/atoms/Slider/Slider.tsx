import type { SliderProps } from './Slider.type';
import BlockStack  from '~/components/molecules/BlockStack';
import InlineStack from '~/components/molecules/InlineStack';
import Text        from '~/components/atoms/Text';

const Slider = ( { label, value, min, max, unit = 'px', onChange }: SliderProps ) => (
	<BlockStack gap={ 6 } padding="4px 0">
		<InlineStack align="between" blockAlign="center">
			<Text size="sm" color="gray-700">{ label }</Text>
			<Text size="xs" color="gray-500">{ value }{ unit }</Text>
		</InlineStack>
		<input
			type="range"
			min={ min }
			max={ max }
			value={ value }
			className="pninja-slider"
			onChange={ ( e: React.ChangeEvent<HTMLInputElement> ) => onChange( Number( e.target.value ) ) }
		/>
	</BlockStack>
);

export default Slider;
