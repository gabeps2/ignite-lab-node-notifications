import { SendNotification } from './send-notification';
import { InMemoryNotificationRepository } from '../../../test/repositories/in-memory-repository';

describe('Send notification', () => {
  it('should be able to send a notification', async () => {
    const notificationsRepository = new InMemoryNotificationRepository();
    const sendNotification = new SendNotification(notificationsRepository);

    const { notification } = await sendNotification.execute({
      content: 'Nova solicitação de amizade',
      category: 'social',
      recipientId: 'recipient-id-test',
    });

    expect(notificationsRepository.notifications).toHaveLength(1);
    expect(notificationsRepository.notifications[0]).toEqual(notification);
  });
});
